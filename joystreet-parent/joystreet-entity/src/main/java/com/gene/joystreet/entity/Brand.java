package com.gene.joystreet.entity;

import java.io.Serializable;

public class Brand implements Serializable{

	private static final long serialVersionUID = -3422237576947217511L;

	private Long id;

    private String name;

    private String firstChar;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getFirstChar() {
        return firstChar;
    }

    public void setFirstChar(String firstChar) {
        this.firstChar = firstChar == null ? null : firstChar.trim();
    }
}