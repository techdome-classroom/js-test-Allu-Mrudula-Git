  const getTotalIsles = function (grid) {


    n= len(grid)
        m= len(grid[0])
        ans= 0
        for(i=0 ; i<n; i++) i in range(n):
            for j in range(m):
                if grid[i][j]== 'L':
                    ans+=1
                    q= [(i,j)]
                    while(len(q)>0):
                        p= q[0]
                        grid[p[0]][p[1]]= 'W'
                        q.pop(0)
                        if(p[0]>0 and grid[p[0]-1][p[1]]=='L'):
                            q.append((p[0]-1, p[1]))
                        if(p[0]<n-1 and grid[p[0]+1][p[1]]=='L'):
                            q.append((p[0]+1, p[1]))
                        if(p[1]>0 and grid[p[0]][p[1]-1]=='L'):
                            q.append((p[0], p[1]-1))
                        if(p[1]<m-1 and grid[p[0]][p[1]+1]=='L'):
                            q.append((p[0], p[1]+1))
        return ans

  };
  
  module.exports = getTotalIsles;

