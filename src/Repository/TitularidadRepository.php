<?php

namespace App\Repository;

use App\Entity\Titularidad;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Titularidad>
 *
 * @method Titularidad|null find($id, $lockMode = null, $lockVersion = null)
 * @method Titularidad|null findOneBy(array $criteria, array $orderBy = null)
 * @method Titularidad[]    findAll()
 * @method Titularidad[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TitularidadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Titularidad::class);
    }

//    /**
//     * @return Titularidad[] Returns an array of Titularidad objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Titularidad
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    public function findByNombre($nombre) {
        return $this->createQueryBuilder('t')
            ->addSelect('t.id')
            ->andWhere('t.nombre = :val')
            ->setParameter('val', $nombre)
            ->getQuery()
            ->getResult();
    }

    public function findByNombreDependencia($nombre, $dependencia) {
        return $this->createQueryBuilder('t')
            ->addSelect('t.id')
            ->andWhere('t.nombre = :val1')
            ->andWhere('t.dependiente_concertado = :val2')
            ->setParameter('val1', $nombre)
            ->setParameter('val2', $dependencia)
            ->getQuery()
            ->getResult();
    }
}
