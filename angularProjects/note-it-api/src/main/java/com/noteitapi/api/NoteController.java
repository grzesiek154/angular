package com.noteitapi.api;


import com.noteitapi.Mapper;
import com.noteitapi.api.view.NoteViewModel;
import com.noteitapi.db.NoteRepository;
import com.noteitapi.db.NotebookRepository;

import com.noteitapi.model.Note;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin
public class NoteController {

    private NoteRepository noteRepository;
    private NotebookRepository notebookRepository;
    private Mapper mapper;

    public NoteController(NoteRepository noteRepository, NotebookRepository notebookRepository, Mapper mapper) {
        this.noteRepository = noteRepository;
        this.notebookRepository = notebookRepository;
        this.mapper = mapper;
    }

    @GetMapping("/all")
    public List<NoteViewModel> all() {
        var notes = this.noteRepository.findAll();

        //map from entity to view model
        var notesVewModel = notes.stream().map(note -> this.mapper.convertToNoteViewModel(note)).collect(Collectors.toList());

        return notesVewModel;
    }

    @GetMapping("byId/{id}")
    public NoteViewModel byId(@PathVariable String id) {

        var note = this.noteRepository.findById(UUID.fromString(id)).orElse(null);

        if (note == null) {

            throw new EntityNotFoundException();
        }

        var noteViewModel = this.mapper.convertToNoteViewModel(note);

        return noteViewModel;
    }

    @PostMapping
    public Note save(@RequestBody NoteViewModel noteCreateViewModel, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new ValidationException();
        }

        var noteEntity = this.mapper.convertToNoteEntity(noteCreateViewModel);

        // save note instance to db
        this.noteRepository.save(noteEntity);

        return noteEntity;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        this.noteRepository.deleteById(UUID.fromString(id));
    }
}
