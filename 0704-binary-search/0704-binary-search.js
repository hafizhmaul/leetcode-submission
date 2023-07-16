/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// BUAT PAKAI ALGORITMA INI ARRAY HARUS DALAM KONDISI SUDAH TERURUT

var search = function(nums, target) {
    let left = 0; //tentukan index paling awal
    let right = nums.length-1; //tentukan index paling akhir
    
    while(left <= right){ //selama index paling awal kurang atau sama dengan index paling akhir lakukan operasi ini
        let mid = Math.floor((left + right) / 2); //ambil index tengah dari array nums
        
        if(nums[mid] === target){ //kalo nums[mid] sama dengan target kembalikan nilai indexnya
            return mid;
        } else if(nums[mid] < target){ //kalo nums[mid] kurang dari nilai target, maka mid ditambah 1
            left = mid + 1;
        } else { //sebaliknya dari atas, maka mid dikurangi 1
            right = mid - 1; ;
        }
    }
    
    return -1; //kalau target gak ada, kembalikan value ini
};