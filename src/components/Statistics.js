import React from 'react';
import PropTypes from 'prop-types';
import randomColorGenerator from '../randomColorGenerator';
import './Statistics.css';

function Statistics({ title, stats }) {
    return (
        <section className="Statistics">
            {' '}
            {title && <h2 className="Statistics-title"> {title} </h2>}
            <ul className="Statistics-list">
                {' '}
                {stats.map(stat => (
                    <li
                        className="Statistics-item"
                        key={stat.id}
                        style={{ backgroundColor: randomColorGenerator() }}
                    >
                        <span className="Statistics-span--first">
                            {' '}
                            {stat.label}{' '}
                        </span>{' '}
                        <span className="Statistics-span--second">
                            {' '}
                            {stat.percentage} %{' '}
                        </span>{' '}
                    </li>
                ))}{' '}
            </ul>{' '}
        </section>
    );
}

Statistics.defaultProps = {
    title: 'Upload stats',
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

export default Statistics;
