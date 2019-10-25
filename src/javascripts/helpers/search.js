import $ from 'jquery';
// import planetData from './data/planetData';
// import utilities from './utilities';

const results = () => {
  $('#planetSearch').on('keyup', (e) => {
    const input = $(e.target).val();
    console.log(input);
    $('.card').hide();
    // $(card).show();
    // $($('.card').attr(`id:contains(${input})`)).show();
    // console.log($('.card').attr('id'));
    $(`.card .planetName:contains(${input})`).closest('.card').show();
    // $($('.card').attr('id')).each((i) => {
    //   console.log(i);
    //   if (i === input) {
    //     $('.card').show();
    //   } else {
    //     $('.card').hide();
    //   }
    // });
    // $('.card').filter((p) => {
    //   console.log(p);
    //   return 0;
    // });
  });
};

export default { results };
