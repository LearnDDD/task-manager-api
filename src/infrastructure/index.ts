import { OnMemoryTaskRepository } from './onMemory/onMemoryTaskRepository';

export let onMemoryTaskRepository: OnMemoryTaskRepository = OnMemoryTaskRepository.create();

export * from './onMemory/onMemoryTaskRepository';
