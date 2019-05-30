/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.galdford.proyect.RestRepository;

import com.galdford.proyect.Document.Comentario;
import com.galdford.proyect.Document.Post;
import com.mongodb.client.result.UpdateResult;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.CriteriaExtensionsKt;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

/**
 *
 * @author galdford
 */
@Repository
public class PostRep {
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	public Post save(Post post) {
		return mongoTemplate.save(post);
	}
	
	public UpdateResult addComment(String idPost, Comentario comentario) {
		return mongoTemplate.updateFirst(
			new Query().addCriteria(Criteria.where("_id").is(idPost)),
			new Update().addToSet("comentarios", comentario),
                        Post.class 
		);
	}
	
	public List<Post> findAll() {
		return mongoTemplate.findAll(Post.class);
		
	}

	public Post find(String idPost) {
		return mongoTemplate.find(new Query().addCriteria(Criteria.where("_id").is(idPost)),Post.class).get(0);
	}

}

