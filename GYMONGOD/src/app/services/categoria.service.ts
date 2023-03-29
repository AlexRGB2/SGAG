import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categorias';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<Categoria[]>(`${this.API_URI}/Categoria`);
  }

  saveCategory(categoria: Categoria) {
    return this.http.post(`${this.API_URI}/Categoria`, categoria);
  }

  updateCategory(name: String, categoryUpdated: any) {
    return this.http.put(`${this.API_URI}/Categoria/${name}`, categoryUpdated);
  }

  deleteCategory(nombre: String) {
    return this.http.delete(`${this.API_URI}/Categoria/${nombre}`);
  }

  getCategoryByName(nombre: string) {
    return this.http.get<Categoria[]>(
      `${this.API_URI}/Categoria/searchName/${nombre}`
    );
  }
}
