import React from 'react'

export default function Logo() {
    return (
        <div className='logo-container'>
            <a href='/' className='logo-text'>SIMPLE</a>
                
            <style jsx>
                {`
                @font-face{
                    font-family: Azonix;
                    src: url(../fonts/Azonix.otf)
                }
                .logo-container{
                    display: block;
                    width: 140px;
                    border-radius: 10px;
                    color: var(--main-color);
                    margin: 8px;
                    .logo-text{
                        font-family: Azonix;
                        font-size: 2rem;
                        padding: 5px;
                        
                    }
                    :hover{
                        background-color: var(--main-color);
                        .logo-text{
                            color: white;
                            
                        }
                    }
                }
                
                `
                }
            </style>
        </div>
    )
}
