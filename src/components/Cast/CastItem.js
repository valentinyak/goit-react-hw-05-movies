import PropTypes from 'prop-types';

export default function CastItem({ cast }) {
  return (
    <li style={{ marginRight: '5px', padding: '0px', width: '130px' }}>
      <p>{cast.name}</p>
      <img
        src={
          cast.profile_path
            ? `http://image.tmdb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`
            : 'https://www.ruprom.ru/templates/images/newdesign/noimage2.png'
        }
        alt="Cast pfoto"
      />
    </li>
  );
}

CastItem.propTypes = {
  cast: PropTypes.object,
};
