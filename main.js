/* Generated by the Nim Compiler v0.17.2 */
/*   (c) 2017 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI44002 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
NTI44002.base = NTI138;

function makeNimstrLit(c_14603) {
		    var ln = c_14603.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_14603.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    

	
}

function setConstr() {
		      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    

	
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_19817, src_19818, ti_19819) {
	var result_20229 = null;

		switch (ti_19819.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(isFatPointer_19801(ti_19819))) {
			result_20229 = src_19818;
			}
			else {
				result_20229 = [src_19818[0], src_19818[1]];
			}
			
			break;
		case 19:
			      if (dest_19817 === null || dest_19817 === undefined) {
        dest_19817 = {};
      }
      else {
        for (var key in dest_19817) { delete dest_19817[key]; }
      }
      for (var key in src_19818) { dest_19817[key] = src_19818[key]; }
      result_20229 = dest_19817;
    
			break;
		case 18:
		case 17:
			if (!((ti_19819.base == null))) {
			result_20229 = nimCopy(dest_19817, src_19818, ti_19819.base);
			}
			else {
			if ((ti_19819.kind == 17)) {
			result_20229 = (dest_19817 === null || dest_19817 === undefined) ? {m_type: ti_19819} : dest_19817;
			}
			else {
				result_20229 = (dest_19817 === null || dest_19817 === undefined) ? {} : dest_19817;
			}
			}
			nimCopyAux(result_20229, src_19818, ti_19819.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_19818 === null) {
        result_20229 = null;
      }
      else {
        if (dest_19817 === null || dest_19817 === undefined) {
          dest_19817 = new Array(src_19818.length);
        }
        else {
          dest_19817.length = src_19818.length;
        }
        result_20229 = dest_19817;
        for (var i = 0; i < src_19818.length; ++i) {
          result_20229[i] = nimCopy(result_20229[i], src_19818[i], ti_19819.base);
        }
      }
    
			break;
		case 28:
			      if (src_19818 !== null) {
        result_20229 = src_19818.slice(0);
      }
    
			break;
		default: 
			result_20229 = src_19818;
			break;
		}

	return result_20229;

}

function mnewString(len_15203) {
		      var result = new Array(len_15203+1);
      result[0] = 0;
      result[len_15203] = 0;
      return result;
    

	
}

function toJSStr(s_15003) {
		    var len = s_15003.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_15003[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_15003[i] < 128)
        asciiPart[i] = fcc(s_15003[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  

	
}
var nimvm_6119 = false;
var nim_program_result = 0;
var globalRaiseHook_11605 = [null];
var localRaiseHook_11610 = [null];
var outOfMemHook_11613 = [null];
var app_44001 = [document.getElementById("app")];

function isFatPointer_19801(ti_19803) {
	var result_19804 = false;

	BeforeRet: do {
		result_19804 = !((ConstSet1[ti_19803.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_19804;

}

function nimCopyAux(dest_19822, src_19823, n_19825) {
		switch (n_19825.kind) {
		case 0:
			break;
		case 1:
			      dest_19822[n_19825.offset] = nimCopy(dest_19822[n_19825.offset], src_19823[n_19825.offset], n_19825.typ);
    
			break;
		case 2:
			L1: do {
				var i_20215 = 0;
				var colontmp__20217 = 0;
				colontmp__20217 = (n_19825.len - 1);
				var res_20220 = 0;
				L2: do {
						L3: while (true) {
						if (!(res_20220 <= colontmp__20217)) break L3;
							i_20215 = res_20220;
							nimCopyAux(dest_19822, src_19823, n_19825.sons[i_20215]);
							res_20220 += 1;
						}
				} while(false);
			} while(false);
			break;
		case 3:
			      dest_19822[n_19825.offset] = nimCopy(dest_19822[n_19825.offset], src_19823[n_19825.offset], n_19825.typ);
      for (var i = 0; i < n_19825.sons.length; ++i) {
        nimCopyAux(dest_19822, src_19823, n_19825.sons[i][1]);
      }
    
			break;
		}

	
}
var html_44004 = [nimCopy(null, [makeNimstrLit("<h1>Hello from Nim !!!</h1>"), makeNimstrLit("<h2>hoge</h2>")], NTI44002)];

function nsuJoinSep(a_37640, sep_37641) {
	var result_37642 = null;

		if ((0 < (a_37640 != null ? a_37640.length : 0))) {
		var L_37655 = ((sep_37641 != null ? sep_37641.length-1 : 0) * ((a_37640 != null ? a_37640.length : 0) - 1));
		L1: do {
			var i_37672 = 0;
			var colontmp__37700 = 0;
			colontmp__37700 = (a_37640 != null ? (a_37640.length-1) : -1);
			var res_37703 = 0;
			L2: do {
					L3: while (true) {
					if (!(res_37703 <= colontmp__37700)) break L3;
						i_37672 = res_37703;
						L_37655 += (a_37640[i_37672] != null ? a_37640[i_37672].length-1 : 0);
						res_37703 += 1;
					}
			} while(false);
		} while(false);
		result_37642 = nimCopy(null, mnewString(0), NTI138);
		if (result_37642 != null) { result_37642 = (result_37642.slice(0, -1)).concat(a_37640[0]); } else { result_37642 = a_37640[0];};
		L4: do {
			var i_37698 = 0;
			var colontmp__37708 = 0;
			colontmp__37708 = (a_37640 != null ? (a_37640.length-1) : -1);
			var res_37711 = 1;
			L5: do {
					L6: while (true) {
					if (!(res_37711 <= colontmp__37708)) break L6;
						i_37698 = res_37711;
						if (result_37642 != null) { result_37642 = (result_37642.slice(0, -1)).concat(sep_37641); } else { result_37642 = sep_37641;};
						if (result_37642 != null) { result_37642 = (result_37642.slice(0, -1)).concat(a_37640[i_37698]); } else { result_37642 = a_37640[i_37698];};
						res_37711 += 1;
					}
			} while(false);
		} while(false);
		}
		else {
			result_37642 = nimCopy(null, makeNimstrLit(""), NTI138);
		}
		

	return result_37642;

}
app_44001[0].innerHTML = toJSStr(nsuJoinSep(html_44004[0], makeNimstrLit("")));