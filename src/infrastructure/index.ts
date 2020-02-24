import { OnMemoryTaskRepository } from './onMemory/onMemoryTaskRepository';
import { OnMemoryTaskTypeRepository } from './onMemory/onMemoryTaskTypeRepository';

export let onMemoryTaskRepository: OnMemoryTaskRepository = OnMemoryTaskRepository.create();
export let onMemoryTaskTypeRepository: OnMemoryTaskTypeRepository = new OnMemoryTaskTypeRepository();

export * from './onMemory/onMemoryTaskRepository';
