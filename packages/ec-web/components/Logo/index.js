import React from 'react'

export default function Logo() {
    return (
        <div className='logo-container'>
            <div className='logo-text'>SIMPLE</div>
                
            <style jsx>
                {`
                @font-face{
                    font-family: Azonix;
                    src: url(../fonts/Azonix.otf)
                }
                .logo-container{
                    color: var(--main-color);
                    margin: 8px;
                    .logo-text{
                        font-family: Azonix;
                        font-size: 2rem;
                        padding: 5px;
                    }
                }
                
                `
                }
            </style>
        </div>
    )
}
