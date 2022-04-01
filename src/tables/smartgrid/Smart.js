import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import ProductTable from './data';
import './css.css'
function Smart() {
  const [etablissement, setEtablissement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEtablissement = async () => {
      setLoading(true);
      try {
        const { data } = await axios('http://127.0.0.1:8000/api/etablissement');
        setEtablissement(data.data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setEtablissement([]);
        console.log(err);
        setLoading(false);
      }
    };
    fetchEtablissement();
  }, []);

  const columns = useMemo(
    () => [
        {
            Header: 'ID',
            accessor: 'id',
          }, {
            Header: 'ID zone',
            accessor: 'zone_travail_id',
          },
      {
        Header: 'canette',
        accessor: 'quantite_dechets_canette',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (sum)`,
      }, {
        Header: 'composte',
        accessor: 'quantite_dechets_composte',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (sum)`,
      }, {
        Header: 'plastique',
        accessor: 'quantite_dechets_plastique',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (sum)`,
      }, {
        Header: 'papier',
        accessor: 'quantite_dechets_papier',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (sum)`,
      },
      {
        Header: 'Adresse',
        accessor: 'adresse',
      },
      {
        Header: 'longitude',
        accessor: 'longitude',
      },
      {
        Header: 'Count In Stock',
        accessor: 'countInStock',
        aggregate: 'sum',
        Aggregated: ({ value }) => `${value} (sum)`,
      },
      {
        Header: 'Brand',
        accessor: 'brand',
      },
      {
        Header: 'Rating',
        accessor: 'rating',
        aggregate: 'average',
        Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`,
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ],
    []
  );
  return (
    <div className="table-container">
      {loading ? (
        <span>Loading Products...</span>
      ) : (
        <ProductTable columns={columns} data={etablissement} />
      )}
    </div>
  );
}

export default Smart;