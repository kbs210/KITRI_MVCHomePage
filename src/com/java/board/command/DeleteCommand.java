package com.java.board.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.java.board.model.BoardDao;
import com.java.board.model.BoardDto;
import com.java.command.Command;

public class DeleteCommand implements Command	{

	@Override
	public String proRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		int boardNumber = Integer.parseInt(request.getParameter("boardNumber")) ;
		int pageNumber = Integer.parseInt(request.getParameter("pageNumber")) ;
		
		BoardDto boardDto = BoardDao.getInstance().read(boardNumber);
		
		request.setAttribute("boardDto", boardDto);
		request.setAttribute("pageNumber", pageNumber);
		
		return "/WEB-INF/board/delete.jsp";
	}

}
