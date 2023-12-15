<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CentroService;
use App\Service\ConcelloService;
use App\Service\TipoCentroService;
use App\Entity\CentroEducativo;
use Doctrine\ORM\EntityManagerInterface;

class AdministracionController extends AbstractController
{
    #[Route('/administracion', name: 'app_administracion')]
    public function index(Request $request, CentroService $centroService, ConcelloService $concelloService, TipoCentroService $tipoCentroService): Response
    {
        $session = $request->getSession();
        if (empty($session->get('email'))) {
            return $this->redirectToRoute('app_login');
        }

        $centros = $centroService->list();
        $concellos = $this->getGroupedConcellos($concelloService);
        $tipos_de_centro = $this->getTiposCentro($tipoCentroService);
        return $this->render('administracion/index.html.twig', [
            'controller_name' => 'AdministracionController',
            'centros' => $centros,
            'concellos' => $concellos,
            'tipos_centro' => $tipos_de_centro,
        ]);
    }

    #[Route('/administracionEdit', name: 'app_administracion_edit')]
    public function edit(Request $request, CentroService $centroService, ConcelloService $concelloService, TipoCentroService $tipoCentroService, EntityManagerInterface $entityManager): Response
    {
        $session = $request->getSession();
        if (empty($session->get('email'))) {
            return $this->redirectToRoute('app_login');
        }
        $nombre = "";
        $centro = new CentroEducativo();
        $centros = $centroService->list();
        $concellos = $this->getGroupedConcellos($concelloService);
        $tipos_de_centro = $this->getTiposCentro($tipoCentroService);

        $valido = true;
        $keys = array_keys($_POST);

        for ($i = 0; $i < count($keys) && $valido; $i++) {
            if ($keys[$i] !== "nombre" && $keys[$i] !== "editar") {
                if (!isset($_POST[$keys[$i]]) || empty(preg_replace('/\s+/', '', $_POST[$keys[$i]]))) {
                    $valido = false;
                }
            }
        }

        if ($valido) {
            if (!array_key_exists('nombre', $_POST)) {
                if (!isset($_POST["editar"]) && empty(preg_replace('/\s+/', '', $_POST["editar"]))) {
                    $valido = false;
                }
            } else {
                if (!isset($_POST["nombre"]) && empty(preg_replace('/\s+/', '', $_POST["nombre"]))) {
                    $valido = false;
                } else {
                    $nombre = $_POST["nombre"];
                }
            }
        }

        if (!$valido) {
            return $this->render('administracion/index.html.twig', [
                'controller_name' => 'AdministracionController',
                'centros' => $centros,
                'concellos' => $concellos,
                'tipos_centro' => $tipos_de_centro,
                'type' => 'error',
                'message' => 'Cubra todos os campos do formulario'
            ]);
        }

        if ($_POST["id"] !== "1") {
            $centro = $centroService->findById($_POST["id"]);
            if ($centro === null) {
                return $this->render('administracion/index.html.twig', [
                    'controller_name' => 'AdministracionController',
                    'centros' => $centros,
                    'concellos' => $concellos,
                    'tipos_centro' => $tipos_de_centro,
                    'type' => 'error',
                    'message' => 'Erro ao procurar o centro por id'
                ]);
            }
            $centro->setTipoDeCentro($_POST["tipo_centro"]);
            $centro->setConcelloId($_POST["concello"]);
            $centro->setTitularidadId($this->titularidadIdBuilder($_POST["titularidad"], $_POST["dependencia"]));
            $centro->setDireccion($_POST["enderezo"]);
            $centro->setCodPostal($_POST["postal"]);
            $centro->setTelefono($_POST["tlf"]);
            $centro->setCoordenadaX($_POST["coordenadaX"]);
            $centro->setCoordenadaY($_POST["coordenadaY"]);
            $centro->setConcello($concelloService->findById($_POST["concello"]));

            $entityManager->flush();
            return $this->render('administracion/index.html.twig', [
                'controller_name' => 'AdministracionController',
                'centros' => $centros,
                'concellos' => $concellos,
                'tipos_centro' => $tipos_de_centro,
                'type' => 'normal',
                'message' => 'Centro editado con éxito'
            ]);
        } else {
            $centro->setNombre($nombre);
            $centro->setTipoDeCentro($_POST["tipo_centro"]);
            $centro->setConcelloId($_POST["concello"]);
            $centro->setTitularidadId($this->titularidadIdBuilder($_POST["titularidad"], $_POST["dependencia"]));
            $centro->setDireccion($_POST["enderezo"]);
            $centro->setCodPostal($_POST["postal"]);
            $centro->setTelefono($_POST["tlf"]);
            $centro->setCoordenadaX($_POST["coordenadaX"]);
            $centro->setCoordenadaY($_POST["coordenadaY"]);
            $centro->setConcello($concelloService->findById($_POST["concello"]));

            $entityManager->persist($centro);
            $entityManager->flush();

            $this->addFlash('notice', 'Centro creado con éxito');
            return $this->redirectToRoute('app_administracion');
        } 
    }

    #[Route('/administracionDelete', name: 'app_administracion_delete')]
    public function delete(Request $request, CentroService $centroService, ConcelloService $concelloService, TipoCentroService $tipoCentroService, EntityManagerInterface $entityManager): Response
    {
        $session = $request->getSession();
        if (empty($session->get('email'))) {
            return $this->redirectToRoute('app_login');
        }

        $centros = $centroService->list();
        $concellos = $this->getGroupedConcellos($concelloService);
        $tipos_de_centro = $this->getTiposCentro($tipoCentroService);
        $centro = $centroService->findById($_POST["id"]);

        if ($centro === null) {
            return $this->render('administracion/index.html.twig', [
                'controller_name' => 'AdministracionController',
                'centros' => $centros,
                'concellos' => $concellos,
                'tipos_centro' => $tipos_de_centro,
                'type' => 'error',
                'message' => 'Erro ao eliminar o centro'
            ]);
        } else {
            $entityManager->remove($centro);
            $entityManager->flush();
            $this->addFlash('notice', 'Centro eliminado con éxito');
            return $this->redirectToRoute('app_administracion');
        }
    }

    public function getGroupedConcellos(ConcelloService $concelloService): array {
        $concellos = array(
            1 => $concelloService->findByProvincia(1),
            2 => $concelloService->findByProvincia(2),
            3 => $concelloService->findByProvincia(3),
            4 => $concelloService->findByProvincia(4)
        );
        return $concellos;
    }

    public function getTiposCentro(TipoCentroService $tipoCentroService) {
        return $tipoCentroService->list();
    }

    public function titularidadIdBuilder($titularidad_nombre, $esDependiente) {
        if ($titularidad_nombre === "Pública") {
            if ($esDependiente === "true") {
                return 1;
            } else {
                return 2;
            }
        } else if ($titularidad_nombre === "Privada") {
            if ($esDependiente === "true") {
                return 3;
            } else {
                return 4;
            }
        }
    }
}
