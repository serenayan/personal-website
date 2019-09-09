import React from 'react';

export function CreateImage(imageURL, detail, height){

        const imgStyle = {
            backgroundImage: 'url(' + imageURL + ')',
            height: height,
        };

        return(

            <div class="textOverImage" 
              style={imgStyle}
              data-text={detail.title+'\n\n'+
              detail.ctgry+'\n'+
              detail.date+'\n'+
              detail.media+'\n'+
              detail.info} >
                
            </div>
        );
}