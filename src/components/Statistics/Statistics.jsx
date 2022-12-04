import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem, Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <StatisticsList>
      <StatisticsItem>
        <Text>Good: {good}</Text>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Neutral: {neutral}</Text>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Bad: {bad}</Text>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Total: {total}</Text>
      </StatisticsItem>
      <StatisticsItem>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </StatisticsItem>
    </StatisticsList>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
