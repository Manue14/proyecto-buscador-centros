<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231201104846 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE centro_educativo (id INT AUTO_INCREMENT NOT NULL, concello_id INT NOT NULL, titularidad_id INT NOT NULL, nombre VARCHAR(100) NOT NULL, direccion VARCHAR(100) NOT NULL, cod_postal VARCHAR(5) NOT NULL, telefono VARCHAR(9) DEFAULT NULL, coordenada_x DOUBLE PRECISION NOT NULL, coordenada_y DOUBLE PRECISION NOT NULL, tipo_de_centro VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE concello (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(200) NOT NULL, provincia_id INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE provincia (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(200) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tipo_centro (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(200) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE titularidad (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(200) NOT NULL, dependiente_concertado TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario_oficial (id INT AUTO_INCREMENT NOT NULL, contraseña_hash VARCHAR(255) NOT NULL, email VARCHAR(200) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE centro_educativo');
        $this->addSql('DROP TABLE concello');
        $this->addSql('DROP TABLE provincia');
        $this->addSql('DROP TABLE tipo_centro');
        $this->addSql('DROP TABLE titularidad');
        $this->addSql('DROP TABLE usuario_oficial');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
