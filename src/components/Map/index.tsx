import React, { useState, SFC } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useMedia } from 'react-use';
import classNames from 'classnames';
import MarkerType from '../../../types/MarkerType';
import styles from './Map.scss';
import Title from '../Title';

const Markers: SFC<{ data: MarkerType[]; onMarkerPress: (datum: MarkerType) => void }> = React.memo(
  ({ data = [], onMarkerPress }) => (
    <>
      {data
        .filter((datum) => datum.symptoms || datum.flu)
        .map((datum) => (
          <Marker
            key={datum.id}
            latitude={Number(datum.latitude)}
            longitude={Number(datum.longitude)}
          >
            <button
              className={classNames({
                [styles.symptonsIcon]: datum.symptoms,
                [styles.confirmedIcon]: datum.flu,
              })}
              onClick={() => onMarkerPress(datum)}
            >
              {datum.flu || datum.symptoms}
            </button>
          </Marker>
        ))}
    </>
  ),
);

const ROWS = [
  { stat: '0.5%', numbers: '12', pill: styles.deathPill },
  { stat: '0.5%', numbers: '12', pill: styles.confirmedPill },
  { stat: '0.5%', numbers: '12', pill: styles.testAdminPill },
  { stat: '0.5%', numbers: '12', pill: styles.symptonsPill },
];

const Map: SFC<{ data: MarkerType[] }> = ({ data = [] }) => {
  const isWide = useMedia('(min-width: 480px)');
  const [currentPoint, setCurrentPoint] = useState<MarkerType>(data[0]);

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 36.491581268721696,
    longitude: -98.55123097524215,
    zoom: 3,
  });

  return (
    <div>
      <div className={styles.mapContainer}>
        <ReactMapGL
          {...viewport}
          width={'100%'}
          height={800}
          mapboxApiAccessToken="pk.eyJ1IjoiaGVhbHRobWFwIiwiYSI6ImNrN3RybjdkazA3enMza3M1aW9wanRkbWUifQ.-KNi92VWNn58VjE4C1qddw"
          onViewportChange={(v) => setViewport(v)}
        >
          <Markers data={data} onMarkerPress={(datum) => setCurrentPoint(datum)} />
        </ReactMapGL>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.container}>
          <hr className={styles.divider} />
          <Title level={3}>{currentPoint.city}</Title>
          <div className={styles.rows}>
            {ROWS.map((row) => (
              <div className={styles.row} key={row.pill}>
                <div className={row.pill}>
                  <h5>{row.stat}</h5>
                </div>
                <div className={styles.text}>
                  <h5>{row.numbers}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
