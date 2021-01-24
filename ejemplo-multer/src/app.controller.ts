import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('upload')
  // @UseInterceptors(FilesInterceptor('image'))
  // uploadFile(@UploadedFiles() file) {
  //   console.log(file);
  // }

  @Post('subir-imagen')
  @UseInterceptors(FileInterceptor('archivo'))
  async subirImagenes(
    @UploadedFile() archivo,
    // @Body('idImagen') idImagen
    @Req() req
    ) {
      console.log(req.files);
      //console.log(Object.keys(req.body));
      console.log(archivo);
    try {
      // console.log(archivo);
      return { archivo };
      // return await this._imagenService
      //     .subirImagen(archivo, idImagen);
      // return await this._vtaDifareFarmService
      //     .convertirArchivoExcelACsv(archivo);
    } catch (e) {
      console.error({
        error: e,
        mensaje: 'Error al leer el archivo',
        data: { archivo },
      });
      throw new BadRequestException({
        mensaje: 'Error en archivo',
        error: e,
      });
    }
  }
}
