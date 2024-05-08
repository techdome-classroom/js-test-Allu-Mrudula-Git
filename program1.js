  const getTotalIsles = function (grid) {

        let n= grid.len
        let m= grid[0].len
        let ans= 0
        let k=0
        for(i=0 ; i<n; i++){
            for(j=0 ; j<m; j++){
                if (grid[i][j]== 'L'){
                    ans+=1
                    let q= [[i,j]]
                    while(len(q)>0){
                        let p= q[k]
                        grid[p[0]][p[1]]= 'W'
                        k++
                        if(p[0]>0 && grid[p[0]-1][p[1]]=='L'){
                            q.push((p[0]-1, p[1]))
                        }
                        if(p[0]<n-1 && grid[p[0]+1][p[1]]=='L'){
                            q.push((p[0]+1, p[1]))
                        }
                        if(p[1]>0 && grid[p[0]][p[1]-1]=='L'){
                            q.push((p[0], p[1]-1))
                        }
                        if(p[1]<m-1 && grid[p[0]][p[1]+1]=='L'){
                            q.push((p[0], p[1]+1))
                        }
                    }
                }
            }
        }
        return ans

  };
  
  module.exports = getTotalIsles;
  grid=  [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
]
  console.log(getTotalIsles(grid))

