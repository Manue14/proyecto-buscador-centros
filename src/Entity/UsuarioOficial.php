<?php

namespace App\Entity;

use App\Repository\UsuarioOficialRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UsuarioOficialRepository::class)]
class UsuarioOficial implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $contraseña_hash = null;

    #[ORM\Column(length: 200)]
    private ?string $email = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContraseñaHash(): ?string
    {
        return $this->contraseña_hash;
    }

    public function setContraseñaHash(string $contraseña_hash): static
    {
        $this->contraseña_hash = $contraseña_hash;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getRoles(): array
    {
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    public function getPassword(): string
    {
        return $this->contraseña_hash;
    }
}
