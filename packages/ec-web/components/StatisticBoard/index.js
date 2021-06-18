import React from 'react';


import PropTypes from 'prop-types';

import {StatisticCPN} from '../StatisticComponent';

export default function StatisticBoard({}){
    return(
        <div className="u-clearfix u-expanded-width-sm u-expanded-width-xs u-gutter-12">
            <div className="u-layout">
                <div className="u-layout-row">
                    <StatisticCPN Solieu='120' Mota='Công việc được đăng'/>
                    <StatisticCPN Solieu='143Tr' Mota='Thu nhập trong tháng' textcolor2='#465f60' BGColor='#6cb6ba'/>
                    <StatisticCPN Solieu='32K' Mota='Lượt ngó xem' textcolor2='#1f347e' BGColor='#70a8eb'/>
                    <StatisticCPN Solieu='24' Mota='Người đặt hàng lại' textcolor2='#4e4a68' BGColor='#7c6dd3'/>
                </div>
            </div>
      </div>
    )
};