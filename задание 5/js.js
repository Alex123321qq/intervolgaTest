function completion(M,N,matrix){//функция заполнения двумерного массива нулями
    for (let i = 0; i < M; i++) {
        matrix[i] = new Array(N);
        for(let j = 0; j < N; j++) {
            matrix[i][j]=0;
        }
      } 
}

function random(M,N,matrix){//функция заполнения 5 рандомных элементов двумерного массива единицами
    let index;//рандомный идекс куда поставится 1
    let max= N*M;// максимальный индекс
    for (let i = 0; i < 5; i++) {
        let k=0;
        index=Math.floor(Math.random() * max);
        flag= new Boolean(false)
        for (let m = 0; m < M; m++) {
            for(let j = 0; j < N; j++) {
                k==index? flag=true:k++;

                if(flag==true){
                    matrix[m][j]==0? matrix[m][j]=1:i--;
                    m=M;
                    j=N;
                }
            }
        }
    }
}

function poisk(M,N,matrix){
        let maxArea=0;//максимальная площадь
        let maxWidth;//максимальная ширина
        let maxLong;//максимальная длинна
        let width;//конечная ширина
        let long;//конечная длинна
        let koordinat = new Array(2);//координаты верхнего левого угла прямоугольника

        for (let i = 0; i < M; i++) {
            for(let j = 0; j < N; j++) {
                if(matrix[i][j]==0){//нашли левый верхний угол
                    maxLong=1;
                    maxWidth=1;
                    for(let m=i+1;m<M;m++){//максимальная ширина для данного прямоугольника
                        matrix[m][j]==0? maxWidth++:m=M;
                    }
                    for(let n=j+1;n<N;n++){//максимальная длинна для данного прямоугольника
                        matrix[i][n]==0? maxLong++:n=N;
                    }

                    if(maxLong!=1&& maxWidth!=1){//если прямоугольник не одноярусный
                    for(let m=i+1;m<i+maxWidth;m++){
                        for(let n=j;n<j+maxLong;n++){
                            if(matrix[m][n]!=0) 
                            {
                                maxLong=n-j;
                                break;
                            }
                        }
                    }
                }
                    if(maxArea<maxLong*maxWidth){//обновление максимальной площади
                        maxArea=maxLong*maxWidth;
                        koordinat[0]=i;
                        koordinat[1]=j;
                        long=maxLong;
                        width=maxWidth;
                    }
            
            }
        }
    }
    zakraska(matrix,koordinat,width,long);
}


function zakraska(matrix,koordinat,width,long){//функция закраски
    for(let i=0;i<width;i++){
        for(let j=0;j<long;j++){
            matrix[koordinat[0]+i][koordinat[1]+j]=2;
        }
    }
}

function main(){
let M = 4;//ширина матрицы
let N = 4;//длинна матрицы
let matrix = new Array(M);

completion(M,N,matrix);//заполнение нулями
random(M,N,matrix);//заполнение единицами
poisk(M,N,matrix);//поиск и закраска
console.log(matrix);
}
