var left_top_cell = {element: document.getElementById("left-top"), row: 0, col: 0};
var center_top_cell = {element: document.getElementById("center-top"), row: 0, col: 1};
var right_top_cell = {element: document.getElementById("right-top"), row: 0, col: 2};

var left_center_cell = {element: document.getElementById("left-center"), row: 1, col: 0};
var center_center_cell = {element: document.getElementById("center-center"), row: 1, col: 1};
var right_center_cell = {element: document.getElementById("right-center"), row: 1, col: 2};

var left_bottom_cell = {element: document.getElementById("left-bottom"), row: 2, col: 0};
var center_bottom_cell = {element: document.getElementById("center-bottom"), row: 2, col: 1};
var right_bottom_cell = {element: document.getElementById("right-bottom"), row: 2, col: 2};

var empty_cell = left_bottom_cell;

document.addEventListener("keydown", keyboard_event_handler);

function keyboard_event_handler(event){
    const key_code = event.keyCode;
    switch(key_code){
        case 37: //arrow left
            swap_empty_cell_with_right_neighbor();
            break;
        case 38: //arrow up
            swap_empty_cell_with_down_neighbor();
            break;
        case 39: //arrow right
            swap_empty_cell_with_left_neighbor();
            break;
        case 40: //arraw down
            swap_empty_cell_with_up_neighbor();
            break;
        default: //user should use arrow key, so nothing to do in default case
    }

    if(is_finish()){
        alert("You Win :D");
        location.reload();
    }
}

function swap_empty_cell_with_right_neighbor(){
    var right_neighbor = return_right_neighbor_of_empty_cell();
    if(right_neighbor == null){
        return;
    }

    var temp = empty_cell.element.innerHTML;
    empty_cell.element.innerHTML = right_neighbor.element.innerHTML;
    right_neighbor.element.innerHTML = temp;

    empty_cell = right_neighbor;
}
function return_right_neighbor_of_empty_cell(){
    switch(empty_cell.row){
        case 0:
            switch(empty_cell.col){
                case 0: return center_top_cell;
                case 1: return right_top_cell;
                case 2: return null;
            }
        case 1:
            switch(empty_cell.col){
                case 0: return center_center_cell;
                case 1: return right_center_cell;
                case 2: return null;
            }
        case 2:
            switch(empty_cell.col){
                case 0: return center_bottom_cell;
                case 1: return right_bottom_cell;
                case 2: return null;
            }
    }
}

function swap_empty_cell_with_left_neighbor(){
    var left_neighbor = return_left_neighbor_of_empty_cell();
    if(left_neighbor == null){return;}

    var temp = empty_cell.element.innerHTML;
    empty_cell.element.innerHTML = left_neighbor.element.innerHTML;
    left_neighbor.element.innerHTML = temp;

    empty_cell = left_neighbor;
}
function return_left_neighbor_of_empty_cell(){
    switch(empty_cell.row){
        case 0:
            switch(empty_cell.col){
                case 0: return null;
                case 1: return left_top_cell;
                case 2: return center_top_cell;
            }
        case 1:
            switch(empty_cell.col){
                case 0: return null;
                case 1: return left_center_cell;
                case 2: return center_center_cell;
            }
        case 2:
            switch(empty_cell.col){
                case 0: return null;
                case 1: return left_bottom_cell;
                case 2: return center_bottom_cell;
            }
    }
}

function swap_empty_cell_with_up_neighbor(){
    var up_neighbor = return_up_neighbor_of_empty_cell();
    if(up_neighbor == null){return;}

    var temp = empty_cell.element.innerHTML;
    empty_cell.element.innerHTML = up_neighbor.element.innerHTML;
    up_neighbor.element.innerHTML = temp;

    empty_cell = up_neighbor;
}
function return_up_neighbor_of_empty_cell(){
    switch(empty_cell.row){
        case 0:
            return null;
        case 1:
            switch(empty_cell.col){
                case 0: return left_top_cell;
                case 1: return center_top_cell;
                case 2: return right_top_cell;
            }
        case 2:
            switch(empty_cell.col){
                case 0: return left_center_cell;
                case 1: return center_center_cell;
                case 2: return right_center_cell;
            }
    }
}

function swap_empty_cell_with_down_neighbor(){
    var down_neighbor = return_down_neighbor_of_empty_cell();
    if(down_neighbor == null){return;}

    var temp = empty_cell.element.innerHTML;
    empty_cell.element.innerHTML = down_neighbor.element.innerHTML;
    down_neighbor.element.innerHTML = temp;

    empty_cell = down_neighbor;
}
function return_down_neighbor_of_empty_cell(){
    switch(empty_cell.row){
        case 0:
            switch(empty_cell.col){
                case 0: return left_center_cell;
                case 1: return center_center_cell;
                case 2: return right_center_cell;
            }
        case 1:
            switch(empty_cell.col){
                case 0: return left_bottom_cell;
                case 1: return center_bottom_cell;
                case 2: return right_bottom_cell;
            }
        case 2:
            return null;
    }
}


function is_finish(){
    var num1 = left_top_cell.element.innerHTML;
    var num2 = center_top_cell.element.innerHTML;
    var num3 = right_top_cell.element.innerHTML;
    var num4 = left_center_cell.element.innerHTML;
    var num5 = center_center_cell.element.innerHTML;
    var num6 = right_center_cell.element.innerHTML;
    var num7 = left_bottom_cell.element.innerHTML;
    var num8 = center_bottom_cell.element.innerHTML;
    return ((num1=="1") && (num2=="2") && (num3=="3") && (num4=="4") && (num5=="5") && (num6=="6") && (num7=="7") && (num8=="8"));
}
