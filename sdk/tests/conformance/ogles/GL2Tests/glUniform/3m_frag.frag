
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
uniform mat3 color;

void main (void)
{
	gl_FragColor = vec4 (color[0][0] + color[0][1] + color[0][2], 
						 color[1][0] + color[1][1] + color[1][2], 
						 color[2][0] + color[2][1] + color[2][2], 
						 1.0);
}