document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.form-min')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const link = document.querySelector('.link')
        const data = JSON.stringify({
            link: link.value
        })
        console.log(data)
        try {
            async function res() {
                let response = await fetch('/links/short', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: data
                  });
                let result = await response.json()
                alert(result.short);
            }
            res()
            
        } catch (error) {
            console.log(error);
        }
        
    })

})