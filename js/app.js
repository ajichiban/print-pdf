
    function genPdf() {
        /* Script version  1.2 */
        html2canvas(document.querySelector('#print-pdf'))
            .then((canvas) => {
                var img = canvas.toDataURL("image/png")
                var doc = new jsPDF()
    
                var width = doc.internal.pageSize.width;
                var height = doc.internal.pageSize.height;
                var h1 = 50
                var aspectwidt = (height - h1) * (9/11);
    
                doc.addImage(img, 'JPEG', 5, 5, aspectwidt, height)
                doc.save('test.pdf')
            })
    
        /* Script version 1.3 */
        /* var img1 = '';
        var img2 = '';
        var doc = new jsPDF();
        html2canvas(document.querySelector("#pdf-content-1")).then(canvas => {
            img1 = canvas.toDataURL('image/png');
            html2canvas(document.querySelector("#pdf-content-2")).then(canvas => {
                var width = doc.internal.pageSize.width;
                var height = doc.internal.pageSize.height;
                var h1 = 50
                var aspectwidt = (height - h1) * (9/11);
    
                img2 = canvas.toDataURL('image/png');
                doc.addImage(img1, 'JPEG', 5, 0, aspectwidt, height-10);
                doc.addPage();//aqui hago un salto de pagina, una imagen en cada pagina
                doc.addImage(img2, 'JPEG',5, 0, aspectwidt, height-100);
                doc.save('test.pdf');
        });
        }); */
    
    }
