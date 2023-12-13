<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CentroService;
use App\Service\ConcelloService;
use App\Service\TipoCentroService;


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
}
