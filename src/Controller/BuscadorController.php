<?php

namespace App\Controller;

use App\Service\CentroService;
use App\Service\ConcelloService;
use App\Service\TitularidadService;
use App\Service\TipoCentroService;
use App\Entity\CentroEducativo;
use App\Entity\Concello;
use App\Entity\Titularidad;
use App\Entity\TipoCentro;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BuscadorController extends AbstractController
{

    #[Route('/buscador', name: 'app_buscador')]
    public function index(ConcelloService $concelloService, TipoCentroService $tipoCentroService): Response
    {
        $concellos = $this->getGroupedConcellos($concelloService);
        $tipos_de_centro = $this->getTiposCentro($tipoCentroService);
        return $this->render('buscador/index.html.twig', [
            'controller_name' => 'BuscadorController',
            'concellos' => $concellos,
            'tipos_centro' => $tipos_de_centro,
        ]);
    }

    #[Route('/buscador/list', name: 'app_buscador_list')]
    public function list(ConcelloService $concelloService, TitularidadService $titularidadService, TipoCentroService $tipoCentroService, CentroService $centroService): Response {
        $concellos = $this->getGroupedConcellos($concelloService);
        $tipos_de_centro = $this->getTiposCentro($tipoCentroService);
        $valido = false;
        $keys = array_keys($_GET);

        for ($i = 0; $i < count($keys) && !$valido; $i++) {
            if (isset($_GET[$keys[$i]]) && !empty($_GET[$keys[$i]])) {
                $valido = true;
            }
        }

        if (!$valido) {
            return $this->render('buscador/index.html.twig', [
                'controller_name' => 'BuscadorController',
                'concellos' => $concellos,
                'tipos_centro' => $tipos_de_centro,
                'type' => 'error',
                'message' => 'Cubra como mínimo un campo do formulario'
            ]);
        }

        $nombre = "";
        if (isset($_GET["nombre"]) && !empty($_GET["nombre"])) {
            $nombre = $_GET["nombre"];
        }

        $tipo_de_centro = "";
        if (isset($_GET["tipo_centro"]) && !empty($_GET["tipo_centro"])) {
            $tipo_de_centro = $_GET["tipo_centro"];
        }

        $provincia_id = 0;
        if (isset($_GET["provincia"]) && !empty($_GET["provincia"])) {
            $provincia_id = $_GET["provincia"];
        }

        $concello_id = 0;
        if (isset($_GET["concello"]) && !empty($_GET["concello"])) {
            $concello_id = $_GET["concello"];
        }

        $titularidad_nombre = "";
        if (isset($_GET["titularidad"]) && !empty($_GET["titularidad"])) {
            $titularidad_nombre = $_GET["titularidad"];
        }

        $titularidad_dependencia = null;
        if (isset($_GET["dependencia"]) && strlen($_GET["dependencia"]) !== 0) {
            $titularidad_dependencia = $_GET["dependencia"];
        }

        $centros = $centroService->queryBuilder($nombre, $tipo_de_centro, $provincia_id, $concello_id, $titularidad_nombre, $titularidad_dependencia);

        return $this->render('buscador/index.html.twig', [
            'controller_name' => 'BuscadorController',
            'concellos' => $concellos,
            'tipos_centro' => $tipos_de_centro,
            'type' => 'normal',
            'message' => 'Éxito',
            'centros' => $centros
        ]);
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

    public function getTitularidadIds(TitularidadService $titularidadService, $nombre, $dependencia) {
        return $titularidadService->findBy($nombre, $dependencia);
    }
}
