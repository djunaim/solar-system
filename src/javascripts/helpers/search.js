import $ from 'jquery';
// import planetData from './data/planetData';
// import utilities from './utilities';

const results = () => {
  $('#planetSearch').on('keyup', () => {
    const input = $(this).val();
    $('.card').hide();
    $(`.card:contains(${input})`).show();
  });
};

export default { results };
