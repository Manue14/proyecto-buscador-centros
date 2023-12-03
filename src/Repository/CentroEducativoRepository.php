<?php

namespace App\Repository;

use App\Entity\CentroEducativo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CentroEducativo>
 *
 * @method CentroEducativo|null find($id, $lockMode = null, $lockVersion = null)
 * @method CentroEducativo|null findOneBy(array $criteria, array $orderBy = null)
 * @method CentroEducativo[]    findAll()
 * @method CentroEducativo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CentroEducativoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CentroEducativo::class);
    }

//    /**
//     * @return CentroEducativo[] Returns an array of CentroEducativo objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CentroEducativo
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
