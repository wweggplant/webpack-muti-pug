const errTip = (content = '', { duration = 2000, className = 'common-errtip', callback = () => $('.common-mask').hide() } = {}) => {
  // $('.common-mask').show();
  weui.topTips(content, {duration, callback, className});
};

if (!IS_PRODUCTION) {// eslint-disable-line
  // require('vconsole');
}

$(() => {
  $(document).ajaxError((event, jqXHR, ajaxSettings, thrownError) => {
    try {
      console.log(jqXHR.responseText);
      let data = JSON.parse(jqXHR.responseText);
      console.log(jqXHR.data);
      if (jqXHR.status === 400) {
        errTip(data.errMsg || data.tipMsg);
      }
      if (jqXHR.status === 401) {
        location.href = 'app/login.do';
      }
    } catch (e) {
      errTip(e.meesage);
    }
  });
  $(document).ajaxComplete(() => {
    $('#loadingToast').hide();
  });
  $(document).ajaxStart(() => {
    $('#loadingToast').show();
  });
});

export default {
  clearForm() {
    $('form').find('input:not("[type=hidden],[type=password]")').val('');
  },
  errTip,
  focusClear($target, $other) {
    $other.each(function() {
      $(this).focus(() => {
        $target.val('');
      });
    });
  },
  dateFomatFromArr: (arr) => `${arr[0].value}-${arr[1].value > 9 ? arr[1].value : `0${arr[1].value}`}-${arr[2].value > 9 ? arr[2].value : `0${arr[2].value}`}`,
  CREDTYPE: [
    {
      label: '身份证',
      value: 1,
    },
    {
      label: '护照',
      value: 3,
    },
    {
      label: '票号',
      value: 4,
    },
    {
      label: '居留证',
      value: 5,
    },
    {
      label: '订单号',
      value: 6,
    },
  ],
};
