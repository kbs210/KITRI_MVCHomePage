/**
 * 
 */
function boardCheck(obj){
	alert("글작성 클릭");
}

function updFunc(root, boardNumber, pageNumber){
	var url = root + "/board/update.do?boardNumber=" + boardNumber + "&pageNumber=" + pageNumber;
	
	alert("글 수정 클릭");
	
	location.href = url;
}

function delFunc(root, boardNumber, pageNumber){
	var url = root + "/board/delete.do?boardNumber=" + boardNumber + "&pageNumber=" + pageNumber;
	alert("글 삭제 클릭");
	location.href = url;
}



function replyFunc(root, boardNumber, pageNumber, groupNumber, sequenceNumber, sequenceLevel){
	var url = root + "/board/write.do?boardNumber=" + boardNumber + "&pageNumber=" + pageNumber + "&groupNumber=" + groupNumber + "&sequenceNumber=" + sequenceNumber +"&sequenceLevel=" + sequenceLevel;
	alert("답글 클릭");
	location.href = url;
}

