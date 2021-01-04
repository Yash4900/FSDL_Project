import java.util.*;
import java.io.*;

public class Solution {
	
    static int group(int a, int b, int arr[][], int n){
        int ans = 0;
        if(arr[a][b]==1){
            if(a<n-1){
                if(arr[a+1][b]==1){
                 ans = ans+1 + group(a+1, b, arr, n);   
                }
            }else if(a>0){
                if(arr[a-1][b]==1){
                ans = ans+1+group(a-1, b, arr, n);    
                }
            }else if(b<n-1){
                if(arr[a][b+1]==1){
                ans = ans + 1+group(a, b+1, arr, n);
                }
            }else if(b>0){
                if(arr[a][b-1]==1){
                ans = ans + 1 + group(a, b-1, arr, n);
                }
            }
            return ans;
        }else{
            return 0;
        }
            
        
    }

	public static void main(String[] args) throws IOException {
		/* Your class should be named Solution.
 			* Read input as specified in the question.
 			* Print output as specified in the question.
		*/

		// Write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
        int t = Integer.parseInt(br.readLine());
        for(int i=0;i<t;i++){
            int n = Integer.parseInt(br.readLine());
            int[][] arr = new int[n][n];
            for(int j=0;j<n;j++){
                arr[j] = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            }
            int r = Integer.parseInt(br.readLine());
            int x=-1, y=-1;
            for(int p=0;p<n;p++){
                for(int q=0;q<n;q++){
                    if(group(p,q, arr, n)==r){
                        x = p;
                        y = q;
                    }
                }
            }
            System.out.println(x+" "+y);
        }
	}

}
