<?php

namespace App\Controller;

use App\Service\CentroService;
use App\Entity\CentroEducativo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use function PHPUnit\Framework\isEmpty;

class BuscadorController extends AbstractController
{
    #[Route('/buscador', name: 'app_buscador')]
    public function index(): Response
    {
        return $this->render('buscador/index.html.twig', [
            'controller_name' => 'BuscadorController',
        ]);
    }

    #[Route('/buscador/list', name: 'app_buscador_list')]
    public function list(CentroService $centroService): Response {
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
                'type' => 'error',
                'message' => 'Cubra como mínimo un campo do formulario'
            ]);
        }

        return $this->render('buscador/index.html.twig', [
            'controller_name' => 'BuscadorController',
            'type' => 'normal',
            'message' => 'Éxito'
        ]);
    }
}
