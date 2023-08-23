import * as React from 'react';
import { Audio, Circles } from  'react-loader-spinner';
import "../styles/loading.css";

export const Loading = (props) => {
    return (
        <div className='loading-spinA'>
            <div className='loading-spinB'>
                <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    )
  }





