
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;

void main (void)
{
	vec2 c = floor(4.0 * color.rg);   // 3/4 true, 1/4 false
	gl_FragColor = vec4(vec3(all(bvec2(c))), 1.0);
}
