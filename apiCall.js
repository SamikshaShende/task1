var request = new XMLHttpRequest()

request.open('GET', 'https://s3.amazonaws.com/open-to-cors/assignment.json', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  data = data.products;

  const result = new Array();

  if (request.status >= 200 && request.status < 400) {

    let index = 0;
    Object.keys(data).forEach(
        key => result[index++] = data[key]
    );

    //sorting data according to decreasing popularity
    result.sort((a, b) => (parseInt(a.popularity) > parseInt(b.popularity)) ? -1 : 1)

    // console.log(result)

    let htmlRows = "";
    let srNo = 1;
    result.forEach(value => {
        // console.log(value)
        htmlRows += "<tr>\
                    <th scope='row'>"+ srNo++ +"</th>\
                    <td>"+ value.title +"</td>\
                    <td>"+ value.subcategory +"</td>\
                    <td>"+ value.price +"</td>\
                    <td>"+ value.popularity +"</td>\
                    </tr>";  
    })
    
    document.getElementById("tableRow").innerHTML = htmlRows;

  } else {
    console.log('error')
  }
}

request.send()