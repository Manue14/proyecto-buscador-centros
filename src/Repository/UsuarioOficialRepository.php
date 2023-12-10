<?php

namespace App\Repository;

use App\Entity\UsuarioOficial;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UsuarioOficial>
 *
 * @method UsuarioOficial|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsuarioOficial|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsuarioOficial[]    findAll()
 * @method UsuarioOficial[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsuarioOficialRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsuarioOficial::class);
    }

//    /**
//     * @return UsuarioOficial[] Returns an array of UsuarioOficial objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?UsuarioOficial
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    public function getUserByEmail($email): ?UsuarioOficial {
        return $this->createQueryBuilder('u')
            ->andWhere('u.email = :val')
            ->setParameter('val', $email)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
}
