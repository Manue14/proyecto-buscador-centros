<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Service\UsuarioService;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(): Response
    {
        return $this->render('login/index.html.twig', [
            'controller_name' => 'LoginController',
        ]);
    }

    #[Route('/loginUser', name: 'app_login_user')]
    public function login(Request $request, UserPasswordHasherInterface $passwordHasher, UsuarioService $usuarioService): Response
    {
        $valido = true;
        $keys = array_keys($_POST);

        for ($i = 0; $i < count($keys) && $valido; $i++) {
            if (!isset($_POST[$keys[$i]]) || empty(preg_replace('/\s+/', '', $_POST[$keys[$i]]))) {
                $valido = false;
            }
        }

        if (!$valido) {
            return $this->render('login/index.html.twig', [
                'controller_name' => 'LoginController',
                'type' => 'error',
                'message' => 'Cubra todos os campos do formulario'
            ]);
        }

        $email = $_POST["email"];
        $pswd = $_POST["pswd"];

        $user = $usuarioService->getUser($email);

        if (is_null($user)) {
            return $this->render('login/index.html.twig', [
                'controller_name' => 'LoginController',
                'type' => 'error',
                'message' => 'O usuario non está rexistrado'
            ]);
        }

        if (!$passwordHasher->isPasswordValid($user, $pswd)) {
            return $this->render('login/index.html.twig', [
                'controller_name' => 'LoginController',
                'type' => 'error',
                'message' => 'Contrasinal incorrecta'
            ]);
        }

        $session = $request->getSession();
        $session->set("email", $email);

        return $this->redirectToRoute('app_administracion');
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(Request $request): Response {
        $session = $request->getSession();
        $session->invalidate();

        return $this->redirectToRoute("app_buscador");
    }
}
