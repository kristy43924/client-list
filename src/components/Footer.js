import React from 'react';

function Footer({title}) {
    return (
        <div className='footer'>
            <h1>{title}</h1>
            <p>
                대표자 : 이승연 | 상호명 : 그린컴퓨터아카데미
                사업자등록번호 : 642-92-00357
                주소 : 울산광역시 남구 삼산중로100번길 26, 케이엠 빌딩 1~4층
            </p>
        </div>
    );
}

export default Footer;