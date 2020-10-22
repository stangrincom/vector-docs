(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{361:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ecards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecards"}},[t._v("#")]),t._v(" ECards")]),t._v(" "),a("h2",{attrs:{id:"get-ecards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-ecards"}},[t._v("#")]),t._v(" Get ecards")]),t._v(" "),a("ul",[a("li",[a("b",[t._v("URL")]),t._v(": "),a("code",[t._v("/v1/ecards")])]),t._v(" "),a("li",[a("b",[t._v("Method")]),t._v(": "),a("code",[t._v("GET")])]),t._v(" "),a("li",[a("b",[t._v("Headers:")]),t._v(" "),a("ul",[a("li",[t._v("Authorization: Bearer [YOUR_ACCESS_TOKEN] "),a("code",[t._v("required")])]),t._v(" "),a("li",[t._v("Content-Type: application/json")])])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("b",[t._v("Status")]),t._v(": 200 OK")]),t._v(" "),a("li",[a("b",[t._v("Type")]),t._v(": "),a("code",[t._v("json")])])]),t._v(" "),a("h4",{attrs:{id:"response-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-body"}},[t._v("#")]),t._v(" Response body")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[a("code",[t._v("int32")])]),t._v(" "),a("td",[t._v("id ecard")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("vendor name ecard")])]),t._v(" "),a("tr",[a("td",[t._v("unit")]),t._v(" "),a("td",[a("code",[t._v("enum")])]),t._v(" "),a("td",[t._v("nominal unit (ruble, month)")])]),t._v(" "),a("tr",[a("td",[t._v("faceValues")]),t._v(" "),a("td",[a("code",[t._v("obj")])]),t._v(" "),a("td",[t._v("(contains the "),a("a",{attrs:{href:"#FaceValue"}},[t._v(" face value ")]),t._v("   )")])])])]),t._v(" "),a("h5",{attrs:{id:"facevalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#facevalue"}},[t._v("#")]),t._v(" FaceValue")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("name face value (Example:1000 ₽, 1 мес. )")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[a("code",[t._v("int32")])]),t._v(" "),a("td",[t._v("face value price")])])])]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Хофф"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"faceValues"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000 ₽"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1100")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Л\'Этуаль"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"faceValues"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500 ₽"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);