import $ from 'jquery';

const results = () => {
  $('#planetSearch').on('keyup', (e) => {
    const input = $(e.target).val();
    $('.card').hide();
    $(`.card .planetName:contains(${input})`).closest('.card').show();
  });
};

export default { results };
