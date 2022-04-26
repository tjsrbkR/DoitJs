//1번 문제
let numbers = [2, 4, 6, 8, 10];
		showArray(numbers);

		function showArray(arr) {
			let str = "<table><tr>";
            let temp = 0; 
			for (let i=0; i<arr.length; i++) {
                temp += arr[i];
				str += "<td>" + arr[i] + "</td>";

            }
			str += " <td>"+temp + "</td></tr></table> ";
			document.write(str);
        }