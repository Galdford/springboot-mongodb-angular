/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.galdford.proyect.Controller;

import com.galdford.proyect.Document.Comentario;
import com.galdford.proyect.Document.Post;
import com.galdford.proyect.RestRepository.PostRep;
import com.mongodb.client.result.UpdateResult;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author galdford
 */
@RestController
@RequestMapping("/api/v1")
public class PostController {
    @Autowired
	private PostRep postRep;
	
	@GetMapping("/posts/")
	public List<Post> findAll(){
		return postRep.findAll();
	}
	
	@PostMapping("/posts")
	public Post save(@RequestBody Post post) {
		return postRep.save(post);
	}
	
	@PostMapping("/posts/{idPost}/addcoment")
	public UpdateResult addComment(@PathVariable("idPost") String idPost, @RequestBody Comentario comentario) {
		return postRep.addComment(idPost, comentario);
	}
}
