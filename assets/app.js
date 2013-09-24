function initialize(){
	$('.add').click(addItem);
	$('.remove').click(removeItem);
	$('.invert').click(reverseList);

	$('form button').click(function(event){
		event.preventDefault();
	});

	$('.color').change(changeColor);

	$('.listNews li').tooltip({
		position: 'left'
	})
}

function changeColor(){
	var color = $('.color').val();
	$('.box').css('border-top', '4px solid '+color);
}

function addItem(){
	var index = $('.inputAdd').val();
	var li = $('.listNews li:first').clone();

	li.attr('data-number',index).find('span').text(index);
	li.find('a').text('Notícia número '+index+' adicionada. Clique aqui para ler mais').attr('title','Título da nova notícia '+index);

	pushNewItem(li);
	reorder();
}

function pushNewItem(li){
	var add = false;	
	var itemValue = parseInt(li.attr('data-number'),10);

	$('.listNews li').each(function(i){
		var current = $(this);
		var thisValue = current.attr('data-number');
		if(!add){
			if(itemValue <= parseInt(thisValue,10)){
				current.before(li);
				add = true;
			}
		}
	});

	if(!add){
		if(li.attr('data-number') > $('.listNews li').size())
			$('.listNews').append(li);
	}

}

function reorder(){
	$('.listNews li').each(function(i){
		$(this).attr('data-number',i+1).find('span').html(i+1);
	});
}

function removeItem(){
	var index = $('.inputRemove').val();
	$('.box .listNews li[data-number="'+index+'"]').remove();
	reorder();
}

function reverseList(){
	var ul = $('.listNews');
	ul.html(ul.find('li').get().reverse());
}

