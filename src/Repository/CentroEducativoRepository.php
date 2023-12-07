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

    public function filterBy($nombre, $tipo_de_centro, $provincia_id, $concello_id, $titularidad_nombre, $titularidad_dependencia): ?array {
        $query = $this->createQueryBuilder('c');
        if (!empty($nombre)) {
            $query->andWhere('c.nombre LIKE :name')
                ->setParameter('name', '%' . $nombre . '%');
        }

        if (!empty($tipo_de_centro)) {
            $query->andWhere('c.tipo_de_centro = :tipo')
                ->setParameter('tipo', $tipo_de_centro);
        }

        if (!empty($provincia_id)) {
            if (empty($concello_id)) {
                $query->leftJoin('c.concello', 'concello')
                    ->andWhere('concello.provincia_id = :provinciaId')
                    ->setParameter('provinciaId', $provincia_id);
            } else {
                $query->andWhere('c.concello_id = :concelloId')
                    ->setParameter('concelloId', $concello_id);
            }
        }

        if (!empty($titularidad_nombre)) {
            if (!isset($titularidad_dependencia)) {
                if ($titularidad_nombre === "Pública") {
                    $query->andWhere('c.titularidad_id = 1 OR c.titularidad_id = 2');
                } else {
                    $query->andWhere('c.titularidad_id = 3 OR c.titularidad_id = 4');
                }
            } else {
                if ($titularidad_dependencia === "true") {
                    if ($titularidad_nombre === "Pública") {
                        $query->andWhere('c.titularidad_id = 1');
                    } else {
                        $query->andWhere('c.titularidad_id = 3');
                    }
                } else {
                    if ($titularidad_nombre === "Pública") {
                        $query->andWhere('c.titularidad_id = 2');
                    } else {
                        $query->andWhere('c.titularidad_id = 4');
                    }
                }
            }
            
        }
       return $query->getQuery()->getResult();
    }
}
