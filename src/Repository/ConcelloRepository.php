<?php

namespace App\Repository;

use App\Entity\Concello;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Concello>
 *
 * @method Concello|null find($id, $lockMode = null, $lockVersion = null)
 * @method Concello|null findOneBy(array $criteria, array $orderBy = null)
 * @method Concello[]    findAll()
 * @method Concello[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcelloRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Concello::class);
    }

//    /**
//     * @return Concello[] Returns an array of Concello objects
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

//    public function findOneBySomeField($value): ?Concello
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    public function findByProvincia($provincia_id): array
        {
            return $this->createQueryBuilder('c')
                ->andWhere('c.provincia_id = :val')
                ->setParameter('val', $provincia_id)
                ->orderBy('c.nombre', 'ASC')
                ->getQuery()
                ->getResult()
            ;
        }
}
