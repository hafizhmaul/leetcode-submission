/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //buat object Map untuk menampung value
  let map = new Map();
  
  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      //kalo sudah pernah ada key dari nums[i] sebelumnya, maka increment valuenya 
      let currentValue = map.get(nums[i]);
      let incrementedValue = currentValue + 1;
      
      map.set(nums[i], incrementedValue)
    } else {
      //kalo key nya belum pernah ada, tambahin key nya kedalam object map dan beri value 1
      map.set(nums[i], 1)
    }
  }

  // ubah object map menjadi sebuah array dan urutkan berdasarkan dari terbesar ke terkecil menggunakan valuenya
  let sortedEntries = [...map.entries()].sort((a,b) => b[1]-a[1]);
  
    //potong array sebanyak jumlah inputan K, dan buat array baru menggunakan method array map, yang dimana array nya berisi keynya
  return sortedEntries.slice(0, k).map(([key]) => key);
};