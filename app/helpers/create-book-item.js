import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function book(params/*, hash*/) {
  let [id, name, author, pages, description, photo, tags, rating] = params;
  let tags_html = "";
  tags.forEach(tag => {
    tags_html += `<a href="#" class="tag-link"><span class="small">${tag}</span></a>,`.slice(0, -1);
  });
  return htmlSafe(`
  <div class="col mb-4">
  <div class="card">
    <img src="${photo}" class="card-img-top" alt="Обложка книги">
    <div class="card-header">
        <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div><strong>Автор</strong>: ${author}</div>
        <div><strong>Количество страниц</strong>: ${pages}</div>
        <div><strong>Теги</strong>: ${tags_html}</div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-auto">
            Рейтинг:
          </div>
          <div class="col">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: ${rating}%;" aria-valuenow="${rating}" aria-valuemin="0" aria-valuemax="100">${rating}%</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="card-footer">
      <div class="row">
        <div class="col">
          <a href="${description}" class="card-link line-offset">Описание</a>
        </div>
        <div class="col text-right">
        <LinkTo @route="edit-book" @model={{${id}}}>
          <button type="button" class="btn btn-edit" onclick="javascript:location='edit-book/${id}'">
            <svg viewBox="0 0 16 16" class="bi bi-pencil card-button" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </button>
        </LinkTo>
          <button type="button" onclick={action ("deleteBook" ${id})} class="btn btn-trash">
            <svg viewBox="0 0 16 16" class="bi bi-trash card-button" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
</div>`);
}

export default helper(book);
